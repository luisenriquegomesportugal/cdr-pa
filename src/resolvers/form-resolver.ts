import { Arg, ID, Mutation, Query, Resolver } from "type-graphql"
import { CreateFormInput } from "../dtos/inputs/create-form-input"
import { FormModel } from "../dtos/models/form-model"
import { ListFormUsecase } from "../use-cases/form/list-form-usecase"
import { CreateFormUsecase } from "../use-cases/form/create-form-usecase"
import { FormRepository } from "../repositories/form-repository"
import { FormFirebaseProvider } from "../repositories/providers/firebase/form-firebase-provider"

@Resolver(() => FormModel)
export class FormsResolver {
    private formFirebaseProvider: FormRepository

    constructor() {
        this.formFirebaseProvider = new FormFirebaseProvider()
    }

    @Query(() => [FormModel], {nullable: true})
    async listForm(): Promise<FormModel[]> {
        let listFormUsecase = new ListFormUsecase(this.formFirebaseProvider)

        return listFormUsecase.execute()
    }

    @Mutation(() => ID)
    async createForm(@Arg("data") data: CreateFormInput) {
        let createFormUsecase = new CreateFormUsecase(this.formFirebaseProvider)

        return createFormUsecase.execute(data)
    }
} 