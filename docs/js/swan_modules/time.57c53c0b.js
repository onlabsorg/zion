(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["swan_modules/time"],{"716c":function(e,t){e.exports=e=>{const t={},n=t=>e.wrap(t)instanceof e.Numb,a=t=>e.wrap(t)instanceof e.Text,r=t=>e.wrap(t)instanceof e.Namespace,s=new e.Undefined("Text"),o=new e.Undefined("Date");return t.now=()=>Date.now()/1e3,t.timezone=()=>-(new Date).getTimezoneOffset()/60,t.to_date=e=>{if(!n(e))return o;const t=new Date(1e3*e);return{year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()+t.getMilliseconds()/1e3}},t.to_UTC_date=e=>{if(!n(e))return o;const t=new Date(1e3*e);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hours:t.getUTCHours(),minutes:t.getUTCMinutes(),seconds:t.getUTCSeconds()+t.getUTCMilliseconds()/1e3}},t.from_date=e=>{if(!r(e))return NaN;const t=e.seconds?Math.trunc(e.seconds):0,n=Math.round(1e3*(e.seconds-t));return Number(new Date(e.year||0,(e.month||1)-1,e.day||1,e.hours||0,e.minutes||0,t,n))/1e3},t.from_UTC_date=e=>{if(!r(e))return NaN;const t=e.seconds?Math.trunc(e.seconds):0,n=Math.round(1e3*(e.seconds-t));return Number(Date.UTC(e.year||0,(e.month||1)-1,e.day||1,e.hours||0,e.minutes||0,t,n))/1e3},t.to_ISO_string=e=>n(e)?new Date(1e3*e).toISOString():s,t.from_string=e=>a(e)?Number(Date.parse(e))/1e3:NaN,t.week_day=e=>n(e)?new Date(1e3*e).getDay():NaN,t.week_number=e=>{if(!n(e))return NaN;const t=new Date(1e3*e);t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var a=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-a.getTime())/864e5-3+(a.getDay()+6)%7)/7)},t}},ae9d:function(e,t){e.exports=e=>{const t={},n=t=>e.wrap(t)instanceof e.Numb,a=t=>e.wrap(t)instanceof e.Text,r=t=>e.wrap(t)instanceof e.Namespace,s=new e.Undefined("Text"),o=new e.Undefined("Date");return t.now=()=>Date.now()/1e3,t.timezone=()=>-(new Date).getTimezoneOffset()/60,t.to_date=e=>{if(!n(e))return o;const t=new Date(1e3*e);return{year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()+t.getMilliseconds()/1e3}},t.to_UTC_date=e=>{if(!n(e))return o;const t=new Date(1e3*e);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hours:t.getUTCHours(),minutes:t.getUTCMinutes(),seconds:t.getUTCSeconds()+t.getUTCMilliseconds()/1e3}},t.from_date=e=>{if(!r(e))return NaN;const t=e.seconds?Math.trunc(e.seconds):0,n=Math.round(1e3*(e.seconds-t));return Number(new Date(e.year||0,(e.month||1)-1,e.day||1,e.hours||0,e.minutes||0,t,n))/1e3},t.from_UTC_date=e=>{if(!r(e))return NaN;const t=e.seconds?Math.trunc(e.seconds):0,n=Math.round(1e3*(e.seconds-t));return Number(Date.UTC(e.year||0,(e.month||1)-1,e.day||1,e.hours||0,e.minutes||0,t,n))/1e3},t.to_ISO_string=e=>n(e)?new Date(1e3*e).toISOString():s,t.from_string=e=>a(e)?Number(Date.parse(e))/1e3:NaN,t.week_day=e=>n(e)?new Date(1e3*e).getDay():NaN,t.week_number=e=>{if(!n(e))return NaN;const t=new Date(1e3*e);t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var a=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-a.getTime())/864e5-3+(a.getDay()+6)%7)/7)},t}}}]);
//# sourceMappingURL=time.57c53c0b.js.map