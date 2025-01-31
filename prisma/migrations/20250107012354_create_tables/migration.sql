/*
  Warnings:

  - Added the required column `user_id` to the `personas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "personas" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "stripe_customer_id" TEXT;

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "priceId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_userId_key" ON "subscriptions"("userId");

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personas" ADD CONSTRAINT "personas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
