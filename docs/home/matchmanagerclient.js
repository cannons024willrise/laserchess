<script>
 // 6) Play Now handler
    document.addEventListener("DOMContentLoaded", () => {
      const toggle  = document.getElementById("sideToggle");
      const playBtn = document.querySelector(".play-now-btn");

      playBtn.addEventListener("click", async () => {
        // ensure user is signed in
        const user = auth.currentUser;
        if (!user) {
          return alert("Please sign in first.");
        }

        // determine side
        const side = toggle.checked ? "blue" : "red";

        // get fresh ID token
        let idToken;
        try {
          idToken = await user.getIdToken(true);
        } catch (e) {
          console.error("Token error:", e);
          return alert("Auth error, please try again.");
        }

        // call your Cloudflare Worker
        try {
          const res = await fetch(
            "https://laserchessnexus-matchmanager-v-alpha.later5143.workers.dev",
            {
              method: "POST",
              headers: {
                "Content-Type":  "application/json",
                "Authorization": `Bearer ${idToken}`
              },
              body: JSON.stringify({ side })
            }
          );
          if (!res.ok) {
            const text = await res.text();
            throw new Error(text || res.status);
          }
          const data = await res.json();
          console.log("Matchmaker →", data);
          // TODO: navigate to your match page or show matchId, etc.
        } catch (err) {
          console.error("Queue error:", err);
          alert("Failed to join queue—check console for details.");
        }
      });
    });
});



   
  </script>


