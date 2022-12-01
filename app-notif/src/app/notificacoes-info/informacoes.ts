interface notificacao {
    titulo: string;
    subtitulo: string;
    data: string 
  }

export const listaNotificacoes: notificacao[] = [
    {
    titulo: "Ifood",
    subtitulo: "Promoções imperdíveis" ,
    data: "30/11"
  },
  {
    titulo: "Whatsapp",
    subtitulo: "Nova mensagem!" ,
    data: "29/11"
  },
  {
    titulo: "Twitter",
    subtitulo: "@fulano curtiu seu post." ,
    data: "29/11"
  }
]

