/*
  Warnings:

  - You are about to drop the `Produtos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categorias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedidos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Produtos" DROP CONSTRAINT "Produtos_id_categoria_fkey";

-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_id_pedido_fkey";

-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_id_produto_fkey";

-- DropTable
DROP TABLE "Produtos";

-- DropTable
DROP TABLE "Usuario";

-- DropTable
DROP TABLE "categorias";

-- DropTable
DROP TABLE "items";

-- DropTable
DROP TABLE "pedidos";

-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modificado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cartao" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "proprietario" TEXT NOT NULL,
    "validade" TEXT NOT NULL,
    "cvv" INTEGER NOT NULL,
    "usuarioId" TEXT,

    CONSTRAINT "Cartao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cartao" ADD CONSTRAINT "Cartao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
