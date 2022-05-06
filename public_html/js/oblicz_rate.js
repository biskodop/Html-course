function oblicz(){
    var K = parseFloat(document.getElementById("kwota").value);
    var n = parseFloat(document.getElementById("rat").value);
    var pr = parseFloat(document.getElementById("procent").value);
    var pr_mc = pr / 12;
    document.getElementById("rata_m").value = pr_mc;
    document.getElementById("kwota_o").value =  (K * pr_mc)/( 1 - ( 1 / Math.pow(1+pr_mc,n) ));
}

