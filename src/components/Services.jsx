import React from 'react'


export default function Services(){
const services = [
{title:'Web Design', desc:'UI/UX and visual design'},
{title:'Frontend Dev', desc:'React, performance, responsiveness'},
{title:'Consulting', desc:'Product and design review'},
]


return (
<section className="py-12">
<h2 className="text-2xl font-bold mb-6">Services</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{services.map(s => (
<div key={s.title} className="bg-white rounded-xl p-6 shadow hover:translate-y-[-4px] transition-transform">
<div className="font-semibold mb-2">{s.title}</div>
<div className="text-sm text-slate-600">{s.desc}</div>
</div>
))}
</div>
</section>
)
}