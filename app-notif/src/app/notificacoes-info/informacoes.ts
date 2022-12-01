interface notificacao {
    titulo: string;
    subtitulo: string;
    data: string;
    lido: boolean
}

export let listaNotificacoes: notificacao[] = [
    {
        titulo: "Ifood",
        subtitulo: "Promoções imperdíveis",
        data: "30/11",
        lido: false
    },
    {
        titulo: "Whatsapp",
        subtitulo: "Nova mensagem!",
        data: "29/11",
        lido: false
    },
    {
        titulo: "Twitter",
        subtitulo: "@fulano curtiu seu post.",
        data: "29/11",
        lido: false
    }
]

