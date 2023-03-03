/*
  Warnings:

  - You are about to drop the column `availabily` on the `apartments` table. All the data in the column will be lost.
  - Added the required column `availability` to the `apartments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "apartments" DROP COLUMN "availabily",
ADD COLUMN     "availability" BOOLEAN NOT NULL;
