import { Prisma } from "@prisma/client";

export type UpdateDto = Prisma.Without<Prisma.TodoUpdateInput, Prisma.TodoUncheckedUpdateInput> & Prisma.TodoUncheckedUpdateInput | Prisma.Without<Prisma.TodoUncheckedUpdateInput, Prisma.TodoUpdateInput> & Prisma.TodoUpdateInput
