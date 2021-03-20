export {};

type Profile = {
    name: string;
    age?: number;
    zipCode: number;
};

// optionalなParameterになる
type PartialType = Partial<Profile>;

// 全てが必須なParameterになる
type RequiredType = Required<Profile>;