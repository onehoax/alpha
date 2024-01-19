import { CreateUserDto } from "src/entity/users/dto/create-user.dto";
import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "src/entity/users/interface/user.repostiroy.interface";
import { ConstatantEnum } from "src/shared/enum/constant.enum";

@Injectable()
export class UsersService {
  constructor(
    @Inject(ConstatantEnum.USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  findAll() {
    return this.userRepository.findAll();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);
    return this.userRepository.findOne(id);
  }

  // async findOne(id: string): Promise<IUserDoc> {
  //   return await this.db
  //     .collection("users")
  //     .findOne<IUserDoc>({ _id: new ObjectId(id) });
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}