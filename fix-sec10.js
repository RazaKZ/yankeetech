const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const oldSec10Part = `        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================
           10. SOME OF THE PLATFORMS WE WORK WITH
           ========================================== -->
      <div class="mt-16 pt-8 border-t border-gray-100">
        <p class="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">
          SOME OF THE PLATFORMS &amp; APIS WE INTEGRATE WITH
        </p>
        <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <!-- Google -->
          <span class="font-display font-bold text-lg tracking-tight">
            <span class="text-blue-500">G</span><span class="text-red-500">o</span><span
              class="text-amber-500">o</span><span class="text-blue-500">g</span><span
              class="text-emerald-500">l</span><span class="text-red-500">e</span>
          </span>
          <!-- AWS / Amazon -->
          <span class="font-display font-extrabold text-lg text-gray-800 flex items-center gap-1">
            <span>aws</span>
            <i class="fa-brands fa-aws text-amber-500 text-base"></i>
          </span>
          <!-- Meta -->
          <span class="font-display font-bold text-lg text-gray-800 flex items-center gap-1.5">
            <i class="fa-brands fa-meta text-blue-600"></i>
            <span>Meta</span>
          </span>
          <!-- HubSpot -->
          <span class="font-display font-extrabold text-lg text-gray-800 flex items-center gap-1">
            <i class="fa-brands fa-hubspot text-[#ff7a59] text-xl"></i><span>HubSpot</span>
          </span>
          <!-- Stripe -->
          <span class="font-display font-extrabold text-xl text-[#635bff] tracking-tight">stripe</span>
          <!-- PayPal -->
          <span class="font-display font-extrabold text-lg text-[#003087] flex items-center gap-1">
            <i class="fa-brands fa-paypal text-[#0079C1]"></i>
            <span>PayPal</span>
          </span>
          <!-- Zapier / n8n -->
          <span class="font-display font-extrabold text-lg text-gray-800 flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-[#ff4a00]"></span>
            <span>Zapier &amp; n8n</span>
          </span>
        </div>
      </div>

    </div>
  </section>`;

const newSec10Part = `        </div>

        <!-- ==========================================
             10. SOME OF THE PLATFORMS WE WORK WITH
             ========================================== -->
        <div class="mt-16 pt-8 border-t border-gray-100">
          <p class="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">
            SOME OF THE PLATFORMS &amp; APIS WE INTEGRATE WITH
          </p>
          <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <!-- Google -->
            <span class="font-display font-bold text-lg tracking-tight">
              <span class="text-blue-500">G</span><span class="text-red-500">o</span><span
                class="text-amber-500">o</span><span class="text-blue-500">g</span><span
                class="text-emerald-500">l</span><span class="text-red-500">e</span>
            </span>
            <!-- AWS / Amazon -->
            <span class="font-display font-extrabold text-lg text-gray-800 flex items-center gap-1">
              <span>aws</span>
              <i class="fa-brands fa-aws text-amber-500 text-base"></i>
            </span>
            <!-- Meta -->
            <span class="font-display font-bold text-lg text-gray-800 flex items-center gap-1.5">
              <i class="fa-brands fa-meta text-blue-600"></i>
              <span>Meta</span>
            </span>
            <!-- HubSpot -->
            <span class="font-display font-extrabold text-lg text-gray-800 flex items-center gap-1">
              <i class="fa-brands fa-hubspot text-[#ff7a59] text-xl"></i><span>HubSpot</span>
            </span>
            <!-- Stripe -->
            <span class="font-display font-extrabold text-xl text-[#635bff] tracking-tight">stripe</span>
            <!-- PayPal -->
            <span class="font-display font-extrabold text-lg text-[#003087] flex items-center gap-1">
              <i class="fa-brands fa-paypal text-[#0079C1]"></i>
              <span>PayPal</span>
            </span>
            <!-- Zapier / n8n -->
            <span class="font-display font-extrabold text-lg text-gray-800 flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-[#ff4a00]"></span>
              <span>Zapier &amp; n8n</span>
            </span>
          </div>
        </div>

      </div>
    </section>`;

if (html.includes(oldSec10Part)) {
  html = html.replace(oldSec10Part, newSec10Part);
  console.log('Fixed Section 10 nesting!');
  fs.writeFileSync('index.html', html, 'utf-8');
} else {
  console.log('oldSec10Part not found exactly');
}
