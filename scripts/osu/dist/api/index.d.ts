export declare type APIOptions = {
    [key: string]: string;
};

export declare type APIOptionsUser = {
    u: string;
    m?: number;
    type?: 'string' | 'id';
    event_days?: number
}

export declare type UserEvents = {
    display_html: string;
    beatmap_id: string;
    beatmapset_id: string;
    date: string;
    epicfactor: string;

}

export declare type APIResponseUser = {
    user_id: string;
    username: string;
    count300: string;
    count100: string;
    count50: string;
    playcount: string;
    ranked_score: string;
    total_score: string;
    pp_rank: string;
    level: string;
    pp_raw: string;
    accuracy: string;
    count_rank_ss: string;
    count_rank_s: string;
    count_rank_a: string;
    country: string;
    pp_country_rank: string;
    events: UserEvents[];
}

export declare type APIOptionsBeatmaps = {
    since?: string;
    s?: number;
    b?: number;
    u?: string | number;
    type?: 'string' | 'id';
    m?: number;
    a?: 0 | 1;
    h?: string;
    limit?: number
}

export declare type APIResponseBeatmaps = {
    approved: string;
    approved_date: string;
    last_update: string;
    artist: string;
    beatmap_id: string;
    beatmapset_id: string;
    bpm: string;
    creator: string;
    difficultyrating: string;
    diff_size: string;
    diff_overall: string;
    diff_approach: string;
    diff_drain: string;
    hit_length: string;
    source: string;
    genre_id: string;
    language_id: string;
    title: string;
    total_length: string;
    version: string;
    file_md5: string;
    mode: string;
    tags: string;
    favourite_count: string;
    playcount: string;
    passcount: string;
    max_combo: string;
}

export declare type APIOptionsScores = {
    b: number;
    u?: string | number;
    m?: number;
    mods?: string | number;
    type: 'string' | 'id';
    limit?: number
}

export declare type APIResponseScores = {
    score_id: string;
    score: string;
    username: string;
    count300: string;
    count100: string;
    count50: string;
    countmiss: string;
    maxcombo: string;
    countkatu: string;
    countgeki: string;
    perfect: string;
    enabled_mods: string;
    user_id: string;
    date: string;
    rank: string;
    pp: string;
}

export declare type APIOptionsUserBest = {
    u: string | number;
    m?: number;
    limit: number;
    type: 'string' | 'id';
}

export declare type APIResponseUserBest = {
    beatmap_id: string;
    score: string;
    maxcombo: string;
    count300: string;
    count100: string;
    count50: string;
    countmiss: string;
    countkatu: string;
    countgeki: string;
    perfect: string;
    enabled_mods: string;
    user_id: string;
    date: string;
    rank: string;
    pp: string;
}

export declare type APIOptionsUserRecent = {
    u: string | number;
    m: number;
    limit: number;
    type: 'string' | 'id';
}

export declare type APIResponseUserRecent = {
    beatmap_id: string;
    score: string;
    maxcombo: string;
    count50: string;
    count100: string;
    count300: string;
    countmiss: string;
    countkatu: string;
    countgeki: string;
    perfect: string;
    enabled_mods: string;
    user_id: string;
    date: string;
    rank: string;
}

export declare type APIOptionsMatch = {
    mp: number;
}

export declare type APIResponseMatch = {
    match: MatchOptions;
    games: GamesOptions[];
}

export declare type MatchOptions = {
    match_id: string;
    name: string;
    start_time: string;
    end_time: null;
}

export declare type GamesOptions = {
    game_id: string;
    start_time: string;
    end_time: string;
    beatmap_id: string;
    play_mode: string;
    match_type: string;
    scoring_type: string;
    team_type: string;
    mods: string;
    scores: ScoresOptions
}

export declare type ScoresOptions = {
    slot: string;
    team: string;
    user_id: string;
    score: string;
    maxcombo: string;
    rank: string;
    count50: string;
    count100: string;
    count300: string;
    countmiss: string;
    countgeki: string;
    countkatu: string;
    perfect: string;
    pass: string;
}

export declare type APIOptionsReplay = {
    m: number;
    b: number;
    u: string;
}

export declare type APIResponseReplay = {
    content: string;
}

export declare class APIWrapper {
    private _apiKey;
    private _baseUrl;
    apiKey: string;
    constructor(apiKey: string);
    private apiCall(url, options);
    getBeatmaps(options: APIOptionsBeatmaps): Promise<APIResponseBeatmaps>[];
    getMatch(options: APIOptionsMatch): Promise<APIResponseMatch>[];
    getReplay(options: APIOptionsReplay): Promise<APIResponseReplay>;
    getScores(options: APIOptionsScores): Promise<APIResponseScores>[];
    getUser(options: APIOptionsUser): Promise<APIResponseUser[]>;
    getUserBest(options: APIOptionsUserBest): Promise<APIResponseUserBest>[];
    getUserRecent(options: APIOptionsUserRecent): Promise<APIResponseUserRecent>[];
}
export declare function api(apiKey: string): APIWrapper;