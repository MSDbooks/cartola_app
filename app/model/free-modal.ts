import { PARTIDAS } from './free-modal';
import { partida, clube, infoFechamento, atleta, infoPatrocinador, infoClube, posicao, statu } from './aux-modal';

// TODA CLASSE QUE TERMINA COM S É UMA ARRAY

export interface PARTIDAS
{
    partidas: partida[],
    clubes: clube,
    rodada: number

}

export interface RODADA
{
    partidas: partida[],
    clubes: clube,
    rodada: number

}

export interface CLUBES
{
    1: infoClube,
    262:infoClube,
    263:infoClube,
    264:infoClube,
    265:infoClube,
    266:infoClube,
    267:infoClube,
    275:infoClube,
    276:infoClube,
    277:infoClube,
    278:infoClube,
    279:infoClube,
    280:infoClube,
    282:infoClube,
    283:infoClube,
    284:infoClube,
    285:infoClube,
    286:infoClube,
    287:infoClube,
    288:infoClube,
    289:infoClube,
    290:infoClube,
    291:infoClube,
    292:infoClube,
    293:infoClube,
    294:infoClube,
    303:infoClube,
    306:infoClube,
    314:infoClube,
    315:infoClube,
    316:infoClube,
    317:infoClube,
    327:infoClube,
    342:infoClube,
    343:infoClube,
    344:infoClube,
    350:infoClube,
    351:infoClube,
    354:infoClube,
    356:infoClube,
    362:infoClube,
    363:infoClube,
    364:infoClube,
    373:infoClube,
    375:infoClube,
    386:infoClube,
    388:infoClube,
    1349:infoClube,
    1390:infoClube,
    2190:infoClube,
    2193:infoClube,
    2197:infoClube,
    2554:infoClube,
    2565:infoClube,
    3057:infoClube

}


export interface STATUS
{
    rodada_atual: number,
    status_mercado: number,
    esquema_default_id: number,
    cartoleta_inicial: number,
    max_ligas_free: number,
    max_ligas_pro: number,
    max_ligas_matamata_free: number,
    max_ligas_matamata_pro: number,
    max_ligas_patrocinadas_free: number,
    max_ligas_patrocinadas_pro_num: number,
    game_over: boolean,
    temporada: number,
    reativar: boolean,
    exibe_sorteio_pro: boolean,
    times_escalados: number,
    fechamento: infoFechamento,
    mercado_pos_rodada: boolean,
    aviso: string,
    aviso_url: string
}

export interface DESTAQUES
{
    Atleta: atleta,
    escalacoes: number,
    clube: string,
    escudo_clube: string,
    posicao: string


}

export interface PATROCINADORES
{
    62: infoPatrocinador,
    63: infoPatrocinador,
    64: infoPatrocinador,
    65: infoPatrocinador,
    66: infoPatrocinador,
    67: infoPatrocinador,

}

export interface RODADAS
{
    rodada_id: Number,
    inicio: string,
    fim: string

}

export interface MERCADO
{
    atletas: atleta[],
    clubes: clube,
    posicoes: posicao,
    status: statu
}







