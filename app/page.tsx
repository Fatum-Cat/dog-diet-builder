'use client';
import React, {useState} from 'react';
import StepNav from '../components/StepNav';
import { INGREDIENTS } from '../components/ingredients';

type Basics = { name:string; breed:string; age:number|''; weight:number|'' };
type RecipeType = 'Conventional'|'Grain-free'|'BARF';

export default function Page(){
  const [step, setStep] = useState(0);
  const [basics, setBasics] = useState<Basics>({ name:'', breed:'', age:'', weight:'' });
  const [rtype, setRtype] = useState<RecipeType|null>(null);

  return (
    <div className="card">
      <h1 className="step-title text-center">Dog Diet Builder – Step {step+1}</h1>
      <p className="text-center">This is just a test page for now ✅</p>
      <StepNav canNext={true} onNext={()=>setStep(s=>s+1)} showBack={step>0} onBack={()=>setStep(s=>s-1)}/>
    </div>
  )
}

