import { PolicyFolder } from "../interfaces/module.type";
import { GroupVariables } from "./group-variables";
import { RoleVariables } from "./role-variables";
import { SchemaVariables } from "./schema-variables";
import { TokenTemplateVariables } from "./token-template-variables";
import { TokenVariables } from "./token-variables";
import { TopicVariables } from "./topic-variables";

export interface IModuleVariables {
    module: PolicyFolder | undefined;
    schemas: SchemaVariables[];
    tokens: TokenVariables[];
    tokenTemplates: TokenTemplateVariables[];
    roles: RoleVariables[];
    groups: GroupVariables[];
    topics: TopicVariables[];
}