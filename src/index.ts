const DEFAULT_TYPE = "Array";
const DEFAULT_LIMIT = 50;
const DEFAULT_STRUCT = {
    "Name": "string",
    "mobile": "number",
    "address": "string"
};

type minerProp = {
    type?: string;
    limit?: number;
    struct?: any
}

const getStringMixedData = () => {
    return "some string";
};

const getNumberMixedData = () => {
    return 9203023;
}

const getDataByType = (key: string) => {
    switch (key) {
        case "string":
            return getStringMixedData();
        case "number":
            return getNumberMixedData();
        default:
            return;
    }

};

const generateArrayData = (struct: any, limit: number) => {
    return new Array(limit).fill('').map((v, i: number) => {
        const item: any = {};
        const itemKeys = Object.keys(struct);
        itemKeys.forEach(p => (item[p] = getDataByType(p)));
        item.id = i + v;
        return item;
    })
};


const miner = (dataObj: minerProp) => {
    const type = dataObj.type || DEFAULT_TYPE;
    const struct = dataObj.struct || DEFAULT_STRUCT;
    const limit = dataObj.limit || DEFAULT_LIMIT;

    switch (type) {
        case DEFAULT_TYPE:
        default:
            return generateArrayData(struct, limit);
    }

};

export default miner;


