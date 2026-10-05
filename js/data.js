/* Todo o conteúdo editável da página fica aqui. Itens com placeholder:true devem ser substituídos. */
const DATA = {
  company: {
    name: "Crisal",
    address: "R. Ulisses Cabral, 70 - Centro, Sapucaia do Sul - RS, 93220-000",
    phone: "(51) 99814-5611",
    wa: "5551998145611",
    msg: "Olá! Vim pelo site da Crisal e gostaria de mais informações."
  },
  nav: [["Início","#inicio"],["Sobre","#sobre"],["Soluções","#solucoes"],["Diferenciais","#diferenciais"],["Avaliações","#avaliacoes"],["FAQ","#faq"],["Localização","#localizacao"]],
  trust: ["Atendimento próximo","Localização central","Aberto até as 19h","Contato direto pelo WhatsApp"],
  /* icon: grid | tag | spark | dots */
  services: [
    { icon:"grid",  title:"Solução 1", desc:"Descreva aqui, em 1 ou 2 linhas, o produto ou serviço.", placeholder:true },
    { icon:"tag",   title:"Solução 2", desc:"Descreva aqui, em 1 ou 2 linhas, o produto ou serviço.", placeholder:true },
    { icon:"spark", title:"Solução 3", desc:"Descreva aqui, em 1 ou 2 linhas, o produto ou serviço.", placeholder:true },
    { icon:"dots",  title:"Outras soluções", desc:"Fale com a equipe para saber o que faz sentido para você.", placeholder:false }
  ],
  benefits: [
    { icon:"chat",  title:"Atendimento próximo", text:"Contato simples e direto com a equipe." },
    { icon:"pin",   title:"Localização central", text:"R. Ulisses Cabral, 70, no Centro de Sapucaia do Sul." },
    { icon:"clock", title:"Horário conveniente", text:"Atendimento informado até as 19h." }
  ],
  /* Só depoimentos reais e autorizados: { text, name, source } */
  testimonials: [],
  faq: [
    { q:"Como posso falar com a Crisal?", a:"Pelo botão de WhatsApp desta página. A mensagem já vai pronta para enviar.", placeholder:false },
    { q:"Onde fica a Crisal?", a:"R. Ulisses Cabral, 70, Centro, Sapucaia do Sul - RS.", placeholder:false },
    { q:"Quais produtos e serviços vocês oferecem?", a:"Lista de produtos e serviços", placeholder:true },
    { q:"Qual é o horário de atendimento?", a:"Horários completos por dia da semana", placeholder:true },
    { q:"Quais são as formas de pagamento?", a:"Formas de pagamento", placeholder:true }
  ]
};
