import { StatusBar } from '@ionic-native/status-bar';
export interface partida
{
    partida_id: number,
    clube_casa_id: number,
    clube_casa_posicao: number,
    clube_visitante_id: number,
    aproveitamento_mandante: string[],
    aproveitamento_visitante: string[],
    clube_visitante_posicao: number,
    partida_data: string,
    local: string,
    valida: boolean,
    placar_oficial_mandante: string,
    placar_oficial_visitante: string,
    url_confronto: string,
    url_transmissao: string

}

export  interface  clube
{
    262:infoClube,
    264:infoClube,
    265:infoClube,
    266:infoClube,
    267:infoClube,
    275:infoClube,
    276:infoClube,
    277:infoClube,
    282:infoClube,
    283:infoClube,
    284:infoClube,
    285:infoClube,
    287:infoClube,
    289:infoClube,
    292:infoClube,
    293:infoClube,
    315:infoClube,
    327:infoClube,
    354:infoClube
}

export  interface infoClube
{
    id: number,
    nome: string,
    abreviacao: string,
    posicao: number,
    escudos: any[]
}



export interface infoFechamento
{
    dia: number,
    mes: number,
    ano: number,
    hora: number,
    minuto: number,
    timestampnumber: number
}

export interface atleta
{
    nome: string,
    apelido: string,
    foto: string,
    atleta_id: number,
    rodada_id: number,
    clube_id: number,
    posicao_id: number,
    status_id: number,
    pontos_num: number,
    preco_num: number,
    variacao_num: number,
    media_num: number,
    jogos_num: number,
    scout: scout

}

export interface scout
{
     scout_A: number, 
     scout_CA: number, 
     scout_FC: number, 
     scout_FD: number, 
     scout_FF: number, 
     scout_FS: number, 
     scout_G: number, 
     scout_I: number, 
     scout_PE: number, 
     scout_PP: number, 
     scout_RB: number, 
     scout_SG: number
}

export interface infoPatrocinador
{
    liga_editorial_id: number,
    liga_id: number,
    servico_glive: number,
    cor_nome_liga: string,
    tipo_ranking: string,
    url_link: string,
    url_editoria_ge: string,
    posicao_inicial: number,
    autorizacao_promocao: string,
    img_background: string,
    img_marca_patrocinador: string,
    img_marca_patrocinador_png: string,
    nome: string,
    optin: boolean,
    url_termo_uso: string
}

export interface posicao
{
    1: infoPosicao,
    2: infoPosicao,
    3: infoPosicao,
    4: infoPosicao,
    5: infoPosicao,
    6: infoPosicao
}

export interface infoPosicao
{
    id: number,
    nome: string,
    abreviacao: string
}

export interface statu
{
    2: infoStatu,
    3: infoStatu,
    5: infoStatu,
    6: infoStatu,
    7: infoStatu,

}

export interface infoStatu
{
    id: number,
    nome: string
}