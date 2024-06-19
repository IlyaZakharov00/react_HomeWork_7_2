export type TItem = { 
    type: string,
    title?: string,
    views: number,
    url?: string
}

export type THocItem = {
    item: TItem
}

export type TPropsList = {
    list: TItem[]
}

export type THocProps = {
    list: TItem[]
}