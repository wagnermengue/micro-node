export class FixturesCommand{
    static command = 'fixtures';
    static description = 'Fixtures data in ElasticSearch';

    async run () {
        console.log("running fixtures");
    }
}