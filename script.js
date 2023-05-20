document.getElementById('certimg1').onclick = function(){
    document.getElementById('cert1').style.display = 'block'
}
document.getElementById('close1').onclick = function(){
    document.getElementById('cert1').style.display = 'none'
}

document.getElementById('certimg2').onclick = function(){
    document.getElementById('cert2').style.display = 'block'
}
document.getElementById('close2').onclick = function(){
    document.getElementById('cert2').style.display = 'none'
}


document.getElementById('m-about').onclick=function(){
    document.getElementById('about').scrollIntoView({behavior: "smooth"})
  }
  document.getElementById('m-education').onclick=function(){
    document.getElementById('education').scrollIntoView({behavior: "smooth"})
  }
  document.getElementById('m-work').onclick=function(){
    document.getElementById('work').scrollIntoView({behavior: "smooth"})
  }
  document.getElementById('m-skill').onclick=function(){
    document.getElementById('skill').scrollIntoView({behavior: "smooth"})
  }
  document.getElementById('m-myWork').onclick=function(){
    document.getElementById('myWork').scrollIntoView({behavior: "smooth"})
  }