// Call slide plugin
if(window.SimpleSlide) {
    new SimpleSlide ({
        slide: "review", // Slide instance name
        time: 5000 // Time between slides in ms
    });
    
    new SimpleSlide ({
        slide: "portfolio", // Slide instance name
        time: 5000, // Time between slides in ms
        nav: true
    });
}

// Call animation plugin
if(window.SimpleAnime) {
    new SimpleAnime ();
}

// Call form plugin
if(window.SimpleForm) {
	new SimpleForm({
	  form: ".formphp", // seletor do formulário
	  button: "#submit", // seletor do botão
	  erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
	  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
	});
}