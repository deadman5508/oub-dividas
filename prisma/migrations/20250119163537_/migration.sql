/*
  Warnings:

  - You are about to drop the column `value` on the `personas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "personas" DROP COLUMN "value",
ADD COLUMN     "cpf" TEXT,
ADD COLUMN     "dowvalue" TEXT,
ADD COLUMN     "upvalue" TEXT;
