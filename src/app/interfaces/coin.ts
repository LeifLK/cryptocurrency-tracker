export interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number | null;
    market_cap: number | null;
    market_cap_rank: number | null;
    fully_diluted_valuation: number | null;
    total_volume: number | null;
    high_24h: number | null;
    low_24h: number | null;
    price_change_24h: number | null;
    price_change_percentage_24h: number | null;
    market_cap_change_24h: number | null;
    market_cap_change_percentage_24h: number | null;
    circulating_supply: number | null;
    total_supply: number | null;
    max_supply: number | null;
    ath: number | null;
    ath_change_percentage: number | null;
    ath_date: string;
    atl: number | null;
    atl_change_percentage: number | string;
    atl_date: string;
    roi: Roi | null;
    last_updated: string;
}

export interface Roi {
    times: number;
    currency: string;
    percentage: number;
}