import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type State = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_KEY } }
        );
        const data = await res.json();
        if (data.valid) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch {
        setState("error");
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setState("loading");
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    if (error) setState("error");
    else if (data?.success) setState("success");
    else if (data?.reason === "already_unsubscribed") setState("already");
    else setState("error");
  };

  return (
    <>
      <Helmet>
        <title>Désabonnement | Glenn Le Bourhis</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-6 py-32 max-w-xl">
          <h1 className="font-display text-3xl font-bold mb-6">Désabonnement</h1>
          {state === "loading" && <p className="text-muted-foreground">Vérification en cours…</p>}
          {state === "valid" && (
            <>
              <p className="text-muted-foreground mb-6">
                Confirmez votre désabonnement pour ne plus recevoir d'emails de notre part.
              </p>
              <Button variant="hero" onClick={confirm}>Confirmer le désabonnement</Button>
            </>
          )}
          {state === "success" && (
            <p className="text-muted-foreground">Vous avez été désabonné. Vous ne recevrez plus d'emails.</p>
          )}
          {state === "already" && (
            <p className="text-muted-foreground">Cette adresse est déjà désabonnée.</p>
          )}
          {state === "invalid" && (
            <p className="text-muted-foreground">Lien invalide ou expiré.</p>
          )}
          {state === "error" && (
            <p className="text-muted-foreground">Une erreur est survenue. Merci de réessayer plus tard.</p>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Unsubscribe;
