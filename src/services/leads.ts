import { supabase } from "@/lib/supabase";
import { Archetype } from "@/types";

export async function saveLead(data: {
  email: string;
  name: string;
  archetype: Archetype;
}) {
  if (!supabase) return null;

  const { data: lead, error } = await supabase
    .from("designer_quiz_leads")
    .upsert(
      {
        email: data.email,
        name: data.name,
        archetype: data.archetype,
        created_at: new Date().toISOString(),
      },
      { onConflict: "email" }
    )
    .select()
    .single();

  if (error) {
    console.error("Error saving lead:", error);
    // Don't throw, let the user see results anyway if capture fails
    return null;
  }

  return lead;
}
