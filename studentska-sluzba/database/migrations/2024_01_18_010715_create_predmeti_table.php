<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('predmeti', function (Blueprint $table) {
            $table->id();
            $table->string('naziv',100);
            $table->string('opis',10);
            $table->integer('godina_studiranja_datog_predmeta');
            $table->string('profesor',150);
            $table->string('asistenti',300);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('predmeti');
    }
};
