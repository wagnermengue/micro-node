import  {default as chalk} from 'chalk';
import {MicroNodeApplication} from "../application";
import * as config from '../config';
import {Esv7DataSource} from "../datasources";
import {Client} from "es7";

export class FixturesCommand{
    static command = 'fixtures';
    static description = 'Fixtures data in ElasticSearch';

    app: MicroNodeApplication;

    async run () {
        console.log("running fixtures");
        await this.bootApp();
        console.log(chalk.red('Delete all documents'));
        await this.deleteAllDocuments();
    }

    private async bootApp() {
        this.app = new MicroNodeApplication(config);
        await this.app.boot();
    }

    private async deleteAllDocuments() {
        const datasource : Esv7DataSource = this.app.getSync<Esv7DataSource>('datasources.esv7');
        // @ts-ignore
        const index = datasource.adapter.settings.index;
        // @ts-ignore
        const client: Client = datasource.adapter.db;
        await client.delete_by_query({
            index,
            body: {
                query: {match_all: {}}
            }
        })
    }
}