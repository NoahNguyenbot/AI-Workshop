"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { Session } from "@supabase/supabase-js";
import { getSupabase } from "./supabase-client";

export default function AuthPanel() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let supabase;
    try {
      supabase = getSupabase();
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  async function handleLogIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setMessage(null);
    const { error } = await getSupabase().auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    else setPassword("");
    setBusy(false);
  }

  async function handleSignUp() {
    setBusy(true);
    setError(null);
    setMessage(null);
    const { data, error } = await getSupabase().auth.signUp({
      email,
      password,
    });
    if (error) setError(error.message);
    else if (!data.session) {
      setMessage("Check your email for a confirmation link, then log in.");
    } else setPassword("");
    setBusy(false);
  }

  async function handleLogOut() {
    setError(null);
    setMessage(null);
    const { error } = await getSupabase().auth.signOut();
    if (error) setError(error.message);
  }

  if (loading) {
    return <p className="auth-status">Loading…</p>;
  }

  if (session) {
    return (
      <div className="auth-panel">
        <p className="auth-status">
          Signed in as <strong>{session.user.email}</strong>
        </p>
        <button type="button" onClick={handleLogOut}>
          Log out
        </button>
        {error && (
          <p className="auth-error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <form className="auth-panel auth-form" onSubmit={handleLogIn}>
      <label>
        Email
        <input
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          autoComplete="current-password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <div className="auth-buttons">
        <button type="submit" disabled={busy}>
          Log in
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={(e) => {
            if (e.currentTarget.form?.reportValidity()) handleSignUp();
          }}
        >
          Sign up
        </button>
      </div>
      {error && (
        <p className="auth-error" role="alert">
          {error}
        </p>
      )}
      {message && <p className="auth-message">{message}</p>}
    </form>
  );
}
