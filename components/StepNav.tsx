'use client';

export default function StepNav({ canNext, onNext, onBack, showBack=true }:{
  canNext:boolean; onNext:()=>void; onBack?:()=>void; showBack?:boolean;
}){
  return (
    <div className="mt-8 flex justify-between">
      {showBack ? <button onClick={onBack} className="btn">Back</button> : <div/>}
      <button disabled={!canNext} onClick={onNext}
        className={`btn btn-primary ${!canNext ? 'opacity-50 cursor-not-allowed' : ''}`}>
        NEXT
      </button>
    </div>
  );
}

