export declare function sha512Crypt(textPassword: string, salt?: string): Promise<string>
export declare function verifySha512(textPassword: string, sha512Password: string | string[]): Promise<boolean>
