import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    base_url: "https://lycheebar.org",
    mount: {
        manual: false,
        page_url: 'https://vihko.notion.site/Notion-Hugo-2122ba3cd2b480e19a27ef8823df27f5?source',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: '45eb121158b9489480ec000fd25c812b',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: 'b7b1816c05ec464391c8c111fa242985',
                target_folder: '.'
            }
        ],
    }
}

export default userConfig;
