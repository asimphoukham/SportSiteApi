export interface Iinjuries {
    playerinjuries: {
        lastUpdatedOn: string,
        playerentry: [
            {
                player: {
                    ID: string,
                    LastName: string,
                    FirstName: string,
                    JerseyNumber: string,
                    Position: string,
                    Height: string,
                    Weight: string,
                    BirthDate: string,
                    Age: string,
                    BirthCity: string,
                    BirthCountry: string,
                    IsRookie: string
                },
                team: {
                    ID: string,
                    City: string,
                    Name: string,
                    Abbreviation: string
                },
                injury: string
            }
        ]
    };
}
