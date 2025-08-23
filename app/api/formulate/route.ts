import { NextRequest } from 'next/server';

export async function POST(req: NextRequest){
  const body = await req.json();
  const { basics, sel } = body;
  const weight = Number(basics?.weight || 0);

  // Na razie prosty placeholder:
  // dzienna porcja = 2.5% masy ciała w gramach
  const total = Math.max(200, Math.round(weight * 1000 * 0.025));

  const grams: Record<string, number> = {};
  const alloc = { meat: total*0.50, grains: total*0.20, vegetables: total*0.25, oil: total*0.05 };

  function assign(items: (string|null|undefined)[], amount:number){
    const list = items.filter(Boolean) as string[];
    if(!list.length) return;
    const per = Math.round(am

