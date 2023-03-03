/*
  Warnings:

  - A unique constraint covering the columns `[building_id,number]` on the table `apartments` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "apartments_number_key";

-- CreateIndex
CREATE UNIQUE INDEX "apartments_building_id_number_key" ON "apartments"("building_id", "number");
