table users {
id uuid [primary key]
created_at timestamp [default: `now()`]
updated_at timestamp [default: `now()`]
deleted_at timestamp [null]
username text [not null, unique]
email text [unique]
password_hash text [null] // NULL se for OAuth
auth_provider text [default: 'local'] // 'local', 'google'
auth_provider_id text [null] // ID do Google se for OAuth
avatar_url text [null]

indexes {
(auth_provider, auth_provider_id) [unique]
}
}

table voting_sessions {
id uuid [primary key]
created_at timestamp [default: `now()`]
updated_at timestamp [default: `now()`]
deleted_at timestamp [null]
week_start_date date [not null, unique]
status text [not null, default: 'open'] // 'open', 'closed', 'movie_selected'
winning_movie_api_id text [null] // ID do TMDB/OMDB do filme vencedor
winning_movie_title text [null] // guardado para histórico mesmo se API cair
ends_at timestamp [null]
}

table movie_nominations {
id uuid [primary key]
created_at timestamp [default: `now()`]
voting_session_id uuid [not null]
movie_api_id text [not null] // ex: TMDB ID "550" (Fight Club)
movie_title text [not null] // cache para exibição rápida
movie_poster_url text [null] // cache
nominated_by_user_id uuid [not null]

indexes {
(voting_session_id, movie_api_id) [unique]
}
}

table votes {
id uuid [primary key]
created_at timestamp [default: `now()`]
updated_at timestamp [default: `now()`]
user_id uuid [not null]
movie_nomination_id uuid [not null]
voting_session_id uuid [not null]

indexes {
(user_id, voting_session_id) [unique]
}
}

// Relacionamentos
ref: movie_nominations.voting_session_id > voting_sessions.id [delete: cascade]
ref: movie_nominations.nominated_by_user_id > users.id [delete: set null]

ref: votes.user_id > users.id [delete: cascade]
ref: votes.movie_nomination_id > movie_nominations.id [delete: cascade]
ref: votes.voting_session_id > voting_sessions.id [delete: cascade]
