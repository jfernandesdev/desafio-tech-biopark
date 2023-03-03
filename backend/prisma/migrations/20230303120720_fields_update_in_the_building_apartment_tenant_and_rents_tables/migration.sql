/*
  Warnings:

  - The primary key for the `tenants` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `tenants` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[number]` on the table `apartments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `floor` to the `apartments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "rents" DROP CONSTRAINT "rents_tenant_id_fkey";

-- DropIndex
DROP INDEX "tenants_cpf_key";

-- AlterTable
ALTER TABLE "apartments" ADD COLUMN     "floor" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "rents" ADD COLUMN     "locator" TEXT NOT NULL DEFAULT 'Biopark';

-- AlterTable
ALTER TABLE "tenants" DROP CONSTRAINT "tenants_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "tenants_pkey" PRIMARY KEY ("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "apartments_number_key" ON "apartments"("number");

-- AddForeignKey
ALTER TABLE "rents" ADD CONSTRAINT "rents_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
