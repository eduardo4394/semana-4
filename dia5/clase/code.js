function cuadrat(a,b,c){
    let resp=0    
    resp = ((-b) + ((b*b - (4*a*c))**0.5))/2*a;
    let ponerHtml = document.write(`la respeusta es ${resp}`)
    return ponerHtml;
}

cuadrat(56,34,5);

function newton(a,b){
    let x=0
    x=a**4+b**4+6*(a**2)*(b**2)+4*(a**3)*b+4*a*(b**3)    
    let new_html = document.write(`la respeusta es ${x}`)
}
newton(2,3);