-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finished" BOOLEAN NOT NULL DEFAULT false,
    "onProgress" BOOLEAN NOT NULL DEFAULT false,
    "finishedDate" INTEGER,
    "rating" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'TO_READ',
    "userId" TEXT,
    CONSTRAINT "Book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Book" ("author", "createdAt", "finished", "finishedDate", "id", "onProgress", "rating", "status", "title", "userId") SELECT "author", "createdAt", "finished", "finishedDate", "id", "onProgress", "rating", "status", "title", "userId" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
