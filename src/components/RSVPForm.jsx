import { useState } from "react";
import { GOOGLE_SCRIPT_URL } from "../config/googleForm";
import { Send } from "lucide-react";

export default function RSVPForm() {
  const [guestName, setGuestName] = useState("");
  const [guestPax, setGuestPax] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState("");

  async function submitRsvp(event) {
    event.preventDefault();

    const name = guestName.trim();
    const pax = Number(guestPax);

    if (
      !name ||
      name.length > 150 ||
      !Number.isInteger(pax) ||
      pax < 1 ||
      pax > 30
    ) {
      setRsvpStatus("Please enter a valid name and guest count.");
      return;
    }

    
    if (
      !GOOGLE_SCRIPT_URL.startsWith("https://script.google.com/macros/s/") ||
      !GOOGLE_SCRIPT_URL.endsWith("/exec") ||
      GOOGLE_SCRIPT_URL.includes("PASTE_YOUR_DEPLOYMENT_ID")
    ) {
      setRsvpStatus("The RSVP form has not been configured yet.");
      return;
    }


    setIsSubmitting(true);
    setRsvpStatus("");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          name,
          pax: String(pax),
        }),
      });

      // This confirms the request was sent, not independently verified.
      setRsvpStatus(
        "Thank you! Your response has been sent. Please contact the hosts if you need to confirm it."
      );

      setGuestName("");
      setGuestPax("1");
    } catch (error) {
      console.error("RSVP submission failed:", error);

      setRsvpStatus(
        "We couldn't send your response. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="rsvp" className="py-16 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-amber-800">
            Join the Celebration!
          </h2>
          <p className="mt-3 text-gray-600">
            Please let us know if you can make it to Thiyesh's special day.
          </p>
        </div>

        <form
          onSubmit={submitRsvp}
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 space-y-5"
        >
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Guest Name
            </label>

            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              maxLength={150}
              required
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Number of Guests
            </label>

            <input
              type="number"
              value={guestPax}
              onChange={(e) => setGuestPax(e.target.value)}
              min="1"
              max="30"
              step="1"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {rsvpStatus && (
            <p className="text-center text-sm text-amber-800">
              {rsvpStatus}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white font-bold py-3 transition"
          >
            <Send size={18} />
            {isSubmitting ? "Sending..." : "Confirm Attendance"}
          </button>
        </form>
      </div>
    </section>
  );
}
