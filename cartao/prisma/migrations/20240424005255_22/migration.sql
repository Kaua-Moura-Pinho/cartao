/*
  Warnings:

  - You are about to drop the column `proprietario` on the `Cartao` table. All the data in the column will be lost.
  - Added the required column `nomeUsuario` to the `Cartao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cartao" DROP COLUMN "proprietario",
ADD COLUMN     "nomeUsuario" TEXT NOT NULL;
