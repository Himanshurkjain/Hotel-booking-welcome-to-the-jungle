import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://bnnccfzqxlwolzmmkank.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJubmNjZnpxeGx3b2x6bW1rYW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxNTQ1NjcsImV4cCI6MjAxNDczMDU2N30.bCdIjP-df80ZCXXmbs9JEa336Pt0vUCymXIrfoei5lU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;
