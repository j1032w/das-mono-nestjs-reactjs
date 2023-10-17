export type MongoQueryGeneric<T> = {
  [P in keyof T]?: T[P] | { $gt?: T[P]; $lt?: T[P]; $in?: T[P][]; /*... other MongoDB query operators ...*/ };
};


