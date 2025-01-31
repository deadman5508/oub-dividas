-- CreateTable
CREATE TABLE "personas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "personas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "debts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT,
    "number" TEXT,
    "description" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "persona_id" TEXT NOT NULL,

    CONSTRAINT "debts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "persona" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "debt_id" TEXT NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "debts" ADD CONSTRAINT "debts_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_debt_id_fkey" FOREIGN KEY ("debt_id") REFERENCES "debts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
