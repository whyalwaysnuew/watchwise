<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'My ID is Gangnam Beauty',
                'slug' => 'my-id-is-gangnam-beauty',
                'category' => 'Romance',
                'video_url' => 'https://www.youtube.com/watch?v=o2NqAENIiVA',
                'thumbnail' => '-',
                'rating' => 8.6,
                'is_featured' => true,
            ],
            [
                'name' => 'Alchemy of Souls',
                'slug' => 'alchemy-of-souls',
                'category' => 'Fantasy',
                'video_url' => 'https://www.youtube.com/watch?v=50kLmhGpt1s&pp=ygUYYWxjaGVteSBvZiBzb3VscyB0cmFpbGVy',
                'thumbnail' => '-',
                'rating' => 9.3,
                'is_featured' => false,
            ],
            [
                'name' => 'Adamas',
                'slug' => 'adamas-drama',
                'category' => 'Mystery',
                'video_url' => 'https://www.youtube.com/watch?v=Ynz6-DJUqsY&pp=ygUNYWRhbWFzdHJhaWxlcg%3D%3D',
                'thumbnail' => '-',
                'rating' => 8.2,
                'is_featured' => false,
            ],
            [
                'name' => 'Hometown Cha Cha Cha',
                'slug' => 'hometown-chachacha',
                'category' => 'Romance',
                'video_url' => 'https://www.youtube.com/watch?v=z66fazyp3-M&pp=ygUcaG9tZXRvd24gY2hhIGNoYSBjaGEgdHJhaWxlcg%3D%3D',
                'thumbnail' => '-',
                'rating' => 9.8,
                'is_featured' => false,
            ],
            [
                'name' => 'The Interest of Love',
                'slug' => 'the-interest-of-love',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=Ny5Ji6C7o94&pp=ygUcdGhlIGludGVyZXN0IG9mIGxvdmUgdHJhaWxlcg%3D%3D',
                'thumbnail' => '-',
                'rating' => 8.9,
                'is_featured' => false,
            ],
        ];

        Movie::insert($movies);
    }
}
