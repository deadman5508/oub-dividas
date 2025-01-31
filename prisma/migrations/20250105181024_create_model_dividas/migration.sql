/*
  Warnings:

  - You are about to drop the column `persona` on the `items` table. All the data in the column will be lost.
  - Added the required column `persona_id` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "items" DROP COLUMN "persona",
ADD COLUMN     "persona_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
