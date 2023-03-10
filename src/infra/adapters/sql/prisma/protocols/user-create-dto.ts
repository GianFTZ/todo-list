import { Prisma } from "@prisma/client"

export type UserCreateDto = Prisma.Without<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput> & Prisma.UserUncheckedCreateInput | Prisma.Without<Prisma.UserUncheckedCreateInput, Prisma.UserCreateInput> & Prisma.UserCreateInput
