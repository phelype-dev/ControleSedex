document.addEventListener('keypress', function() { //pega o evento de precionar uma tecla
    //if(event.keyCode != 46 && event.keyCode != 8){//verifica se a tecla precionada nao e um backspace e delete
      var i = document.getElementById("CPF").value.length; //aqui pega o tamanho do input
      if (i === 3 || i === 7) //aqui faz a divisoes colocando um ponto no terceiro e setimo indice
        document.getElementById("CPF").value = document.getElementById("CPF").value + ".";
      else if (i === 11) //aqui faz a divisao colocando o tracinho no decimo primeiro indice
        document.getElementById("CPF").value = document.getElementById("CPF").value + "-";
    }
);

document.addEventListener('keydown', function(event) { //pega o evento de precionar uma tecla
    if(event.keyCode != 46 && event.keyCode != 8){//verifica se a tecla precionada nao e um backspace e delete
      var i = document.getElementById("CEP").value.length; //aqui pega o tamanho do input
      if ( i === 5) //aqui faz a divisoes colocando um ponto no terceiro e setimo indice
        document.getElementById("CEP").value = document.getElementById("CEP").value + "-";
    }
});

document.addEventListener('keydown', function(event) { //pega o evento de precionar uma tecla
    if(event.keyCode != 46 && event.keyCode != 8){//verifica se a tecla precionada nao e um backspace e delete
      var i = document.getElementById("latitude").value.length; //aqui pega o tamanho do input
      if ( i === 0) //aqui faz a divisoes colocando um ponto no terceiro e setimo indice
        document.getElementById("latitude").value = document.getElementById("latitude").value + "-";
        else if(i === 3)
        document.getElementById("latitude").value = document.getElementById("latitude").value + ".";
    }
});

document.addEventListener('keydown', function(event) { //pega o evento de precionar uma tecla
    if(event.keyCode != 46 && event.keyCode != 8){//verifica se a tecla precionada nao e um backspace e delete
      var i = document.getElementById("longitude").value.length; //aqui pega o tamanho do input
      if ( i === 0) //aqui faz a divisoes colocando um ponto no terceiro e setimo indice
        document.getElementById("longitude").value = document.getElementById("longitude").value + "-";
        else if(i === 3)
        document.getElementById("longitude").value = document.getElementById("longitude").value + ".";
    }
});

document.addEventListener('keydown', function(event) { //pega o evento de precionar uma tecla
    if(event.keyCode != 46 && event.keyCode != 8){//verifica se a tecla precionada nao e um backspace e delete
      var i = document.getElementById("celular").value.length; //aqui pega o tamanho do input
      if ( i === 0) //aqui faz a divisoes colocando um ponto no terceiro e setimo indice
        document.getElementById("celular").value = document.getElementById("celular").value + "(";
        else if(i === 3)
        document.getElementById("celular").value = document.getElementById("celular").value + ")";
        else if(i === 9)
        document.getElementById("celular").value = document.getElementById("celular").value + "-";
    }
});

/*document.addEventListener('keydown', function(event) { //pega o evento de precionar uma tecla
  if(event.keyCode != 46 && event.keyCode != 8){//verifica se a tecla precionada nao e um backspace e delete
    var i = document.getElementById("telefone").value.length; //aqui pega o tamanho do input
    if ( i === 0) //aqui faz a divisoes colocando um ponto no terceiro e setimo indice
      document.getElementById("telefone").value = document.getElementById("telefone").value + "(";
      else if(i === 3)
      document.getElementById("telefone").value = document.getElementById("telefone").value + ")";
      else if(i === 8)
      document.getElementById("telefone").value = document.getElementById("telefone").value + "-";
  }
});*/