import { createClient } from "@supabase/supabase-js"

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5bHplc29hd3ZpamJ0eG52a3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNTcxNTAsImV4cCI6MjA2NzczMzE1MH0.44CEu6DFnuYgz-7VqTEmTwTLnu5tQu13vcHUx4usUmU"
const supabase_url="https://fylzesoawvijbtxnvkwy.supabase.co"

const supabase = createClient(supabase_url, anon_key)

export default function mediaUpload(file){
    supabase.storage.from("images").upload(`${file.name}`,file, {
        cacheControl: '3600',
        upsert: false,
    }).then((res)=>{
        const publicUrl = supabase.storage.from("images").getPublicUrl(file.name).data.publicUrl;
        console.log(publicUrl)
    })
}